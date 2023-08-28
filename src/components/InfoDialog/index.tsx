/* eslint-disable react/jsx-no-bind */
import {Icon} from '@iconify-icon/react'
import {DownloadIcon, InfoOutlineIcon, LaunchIcon} from '@sanity/icons'
import {Box, Button, Dialog, Flex, Grid} from '@sanity/ui'
import styled from 'styled-components'
import {copySvgBase64, copySvgHtml} from '../../lib/copy2Clipboard'
import {useAppStore} from '../../store'
import DataUrl from '../icons/DataURLIcon'
import HtmlIcon from '../icons/HtmlIcon'
import {StyledBaseButton, StyledGridForm} from '../shared/SharedStyledComponents'

const StyledCell = styled.span<{bold?: boolean}>`
  font-size: 13px;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  align-self: center;
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
          <StyledGridForm margin={4} marginTop={2} columns={[1, 2]} gapY={[2, 3]}>
            <StyledCell bold>Icon Name:</StyledCell>
            <StyledCell>{sanityValue?.metadata?.iconName}</StyledCell>
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
            <StyledCell bold>Original Svg:</StyledCell>
            <Grid columns={3} gap={2}>
              <Button
                as='a'
                title='Download SVG'
                mode='bleed'
                tone='primary'
                icon={DownloadIcon}
                fontSize={0}
                padding={1}
                style={{
                  cursor: 'pointer',
                  display: 'inline-flex',
                  transition: 'all 0.3s ease-in-out',
                }}
                href={`https://api.iconify.design/${sanityValue?.icon}.svg?download=1`}
              />
              <StyledBaseButton
                title='Copy svg html to clipboard'
                mode='bleed'
                tone='primary'
                icon={HtmlIcon}
                fontSize={0}
                padding={1}
                paddingTop={2}
                onClick={() => copySvgHtml(sanityValue?.icon!)}
              />
              <StyledBaseButton
                title='Copy svg Data URL to clipboard'
                mode='bleed'
                tone='primary'
                icon={<DataUrl width='20' />}
                fontSize={0}
                padding={1}
                paddingTop={2}
                onClick={() => copySvgBase64(sanityValue?.icon!)}
              />
            </Grid>
          </StyledGridForm>
        </Dialog>
      )}
    </>
  )
}

export default InfoDialog
