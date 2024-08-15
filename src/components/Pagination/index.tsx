import {Flex, Text} from '@sanity/ui'
import {ReactNode} from 'react'

import usePluginTranslation from '../../hooks/usePluginTranslation'
import {PaginationButton} from '../../style'

interface PaginationProps {
  totalItems: number
  currentPage: number
  totalPages: number
  setNextPage: () => void
  setPrevPage: () => void
}

export default function Pagination({
  totalItems,
  currentPage,
  totalPages,
  setNextPage,
  setPrevPage,
}: PaginationProps): ReactNode {
  const {t} = usePluginTranslation()
  if (!totalPages) return null

  return (
    <Flex
      justify='space-between'
      marginX={4}
      marginY={1}
      gap={2}
      align='center'
      style={{minHeight: '22px'}}
    >
      <Text as='i' size={1}>
        {t('dialog.add.icon.found.label', {count: totalItems})}
      </Text>
      {totalPages > 1 && (
        <Flex gap={2} align='center'>
          <PaginationButton type='button' onClick={setPrevPage} disabled={currentPage === 0}>
            ←
          </PaginationButton>
          <Text size={1}>
            {currentPage + 1} / {totalPages}
          </Text>
          <PaginationButton
            type='button'
            onClick={setNextPage}
            disabled={currentPage === totalPages - 1}
          >
            →
          </PaginationButton>
        </Flex>
      )}
    </Flex>
  )
}
