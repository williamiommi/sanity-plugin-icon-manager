import {Icon} from '@iconify/react'
import {EllipsisHorizontalIcon} from '@sanity/icons'
import {Box, Card, Flex, Popover, TextInput} from '@sanity/ui'
import {ReactNode, useCallback, useEffect, useMemo, useRef, useState} from 'react'

import useClickOutsideMultiple from '../../hooks/useClickOutsideMultiple'
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
  const setSearchResults = useAppStoreContext((s) => s.setSearchResults)
  const [hasFocus, setFocus] = useState(false)

  const onBlurHandler = useCallback(() => {
    setFocus(false)
    setSearchResults(undefined)
  }, [setFocus, setSearchResults])

  const [wrapperRef, popoverRef] = useClickOutsideMultiple<HTMLDivElement>(onBlurHandler, 2)

  const onFocusHandler = useCallback(() => {
    setFocus(true)
    if (searchTerm && searchTerm.length >= 3) searchIcons()
  }, [setFocus, searchTerm, searchIcons])

  const showPopover = useMemo(
    () => hasFocus && debouncedSearchTerm && debouncedSearchTerm.length >= 3,
    [hasFocus, debouncedSearchTerm],
  )

  useEffect(() => {
    if (debouncedSearchTerm && debouncedSearchTerm.length >= 3) {
      searchIcons()
    } else {
      setSearchResults(undefined)
    }
  }, [debouncedSearchTerm, searchIcons, setSearchResults])

  return (
    <>
      <Card border radius={2}>
        <Flex align='center' justify='center'>
          <Box flex={1} ref={wrapperRef}>
            <TextInput
              border={false}
              placeholder={t('simple.ui.placeholder')}
              ref={inputRef}
              style={{width: '100%'}}
              icon={sanityValue?.icon && <Icon icon={sanityValue.icon} style={{maxWidth: 20}} />}
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
        ref={popoverRef}
        content={<ResultsGrid items={searchResults} padding={3} />}
        open
        style={{display: showPopover ? 'block' : 'none'}}
        placement='bottom'
        fallbackPlacements={['bottom']}
        arrow={false}
        matchReferenceWidth
        overflow='auto'
        referenceElement={inputRef.current}
        portal
        shadow={searchResults ? 2 : 0}
      />
    </>
  )
}
