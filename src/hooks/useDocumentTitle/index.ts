import { useRef, useEffect } from 'react'

function useDocumentTitle(title: string, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title)
  const suffix = 'Coffe Delivery'

  useEffect(() => {
    document.title = `${title} | ${suffix}`
  }, [title])

  useEffect(() => {
    if (prevailOnUnmount) {
      document.title = defaultTitle.current
    }
  }, [prevailOnUnmount])
}

export default useDocumentTitle
