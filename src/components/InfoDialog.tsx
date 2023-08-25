import {Icon} from '@iconify-icon/react'
import {InfoOutlineIcon, LaunchIcon} from '@sanity/icons'
import {Box, Dialog, Flex, Grid} from '@sanity/ui'
import styled from 'styled-components'
import {useAppStore} from '../store'
import {StyledBaseButton} from './shared/ShartedStyledComponents'

const StyledCell = styled.span<{bold?: boolean}>`
  font-size: 13px;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`

const DialogHeader = () => (
  <Flex align='center' gap={3}>
    <InfoOutlineIcon />
    <span>Info</span>
  </Flex>
)

interface InfoDialogProps {}

const InfoDialog = (props: InfoDialogProps) => {
  const sanityValue = useAppStore((s) => s.sanityValue)
  const isInfoDialogOpen = useAppStore((s) => s.isInfoDialogOpen)
  const openInfoDialog = useAppStore((s) => s.openInfoDialog)
  const closeInfoDialog = useAppStore((s) => s.closeInfoDialog)
  return (
    <>
      <StyledBaseButton
        mode='bleed'
        tone='primary'
        icon={<InfoOutlineIcon width={18} />}
        onClick={openInfoDialog}
        fontSize={1}
        text='Info'
        padding={2}
      />
      {isInfoDialogOpen && (
        <Dialog id='info-dialog' header={<DialogHeader />} onClose={closeInfoDialog} width={0}>
          <Box marginX={4} marginTop={2}>
            <Icon icon={sanityValue?.icon!} width={20} height={20} />
          </Box>
          <Grid margin={4} marginTop={2} columns={[1, 2]} gapY={3}>
            <StyledCell bold>Icon Name:</StyledCell>
            <StyledCell>{sanityValue?.metadata?.iconName}</StyledCell>
            <StyledCell bold>Original Size:</StyledCell>
            <StyledCell>
              {sanityValue?.metadata?.viewbox} x {sanityValue?.metadata?.viewbox}
            </StyledCell>
            <StyledCell bold>Collection:</StyledCell>
            <StyledCell>{sanityValue?.metadata?.collectionName}</StyledCell>
            <StyledCell bold>Author:</StyledCell>
            <StyledCell>
              <a href={sanityValue?.metadata?.author?.url} target='_blank' rel='noreferrer'>
                <span>{sanityValue?.metadata?.author?.name}</span>&nbsp;
                <LaunchIcon width={10} />
              </a>
            </StyledCell>
            <StyledCell bold>License:</StyledCell>
            <StyledCell>
              <a href={sanityValue?.metadata?.license?.url} target='_blank' rel='noreferrer'>
                {sanityValue?.metadata?.license?.name}&nbsp;
                <LaunchIcon width={10} />
              </a>
            </StyledCell>
          </Grid>
        </Dialog>
      )}
    </>
  )
}

export default InfoDialog
