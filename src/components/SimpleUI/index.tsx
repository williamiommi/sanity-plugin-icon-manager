import {Icon} from '@iconify/react'
import {EllipsisHorizontalIcon} from '@sanity/icons'
import {Box, Card, Flex, Popover, TextInput} from '@sanity/ui'
import {ReactNode, useCallback, useEffect, useMemo, useRef, useState} from 'react'

import useClickOutside from '../../hooks/useClickOutside'
import useDebounce from '../../hooks/useDebounce'
import usePluginTranslation from '../../hooks/usePluginTranslation'
import {useAppStoreContext} from '../../store/context'
import InfoMenu from '../InfoMenu'
import ResultsGrid from '../ResultsGrid'

export default function SimpleUI(): ReactNode {
  const {t} = usePluginTranslation()
  const inputRef = useRef<HTMLInputElement>(null)
  const searchTerm = useAppStoreContext((s) => s.searchTerm)
  const debouncedSearchTerm = useDebounce(searchTerm, 300)
  const sanityValue = useAppStoreContext((s) => s.sanityValue)
  const setSearchTerm = useAppStoreContext((s) => s.setSearchTerm)
  const searchIcons = useAppStoreContext((s) => s.searchIcons)
  const searchResults = useAppStoreContext((s) => s.searchResults)
  const closeSearchDialog = useAppStoreContext((s) => s.closeSearchDialog)
  const [hasFocus, setFocus] = useState(false)

  const onBlurHandler = useCallback(() => {
    setFocus(false)
    closeSearchDialog()
  }, [setFocus, closeSearchDialog])

  const wrapperRef = useClickOutside<HTMLDivElement>(onBlurHandler)

  const onFocusHandler = useCallback(() => {
    setFocus(true)
  }, [setFocus])

  const showPopover = useMemo(
    () => hasFocus && debouncedSearchTerm && debouncedSearchTerm.length >= 3,
    [hasFocus, debouncedSearchTerm],
  )

  useEffect(() => {
    if (debouncedSearchTerm && debouncedSearchTerm.length >= 3) {
      searchIcons()
    }
  }, [debouncedSearchTerm, searchIcons, closeSearchDialog])

  return (
    <div ref={wrapperRef}>
      <Card border radius={2}>
        <Flex align='center' justify='center'>
          <Box flex={1}>
            <TextInput
              border={false}
              placeholder={t('simple.ui.placeholder')}
              ref={inputRef}
              style={{width: '100%'}}
              icon={sanityValue?.icon && <Icon icon={sanityValue.icon} />}
              onChange={setSearchTerm}
              onFocus={onFocusHandler}
              value={searchTerm ?? ''}
            />
          </Box>
          {sanityValue?.icon && (
            <Card borderLeft>
              <InfoMenu menuIcon={EllipsisHorizontalIcon} showTrash />
            </Card>
          )}
        </Flex>
      </Card>
      <Popover
        content={<ResultsGrid items={searchResults} padding={3} />}
        open
        style={{display: showPopover ? 'block' : 'none'}}
        placement='bottom'
        fallbackPlacements={['bottom']}
        arrow={false}
        matchReferenceWidth
        overflow='auto'
        referenceElement={inputRef.current}
      />
    </div>
  )
}
