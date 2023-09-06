import {ToastContextValue} from '@sanity/ui'

interface ToastProps {
  sanityToast: ToastContextValue | undefined
  title: string
  description?: string
  duration?: number
}

export const toastSuccess = ({
  sanityToast,
  title,
  description,
  duration = 1000,
}: ToastProps): void => {
  if (sanityToast) sanityToast.push({status: 'success', title, description, duration})
}

export const toastWarning = ({
  sanityToast,
  title,
  description,
  duration = 3000,
}: ToastProps): void => {
  if (sanityToast) sanityToast.push({status: 'warning', title, description, duration})
}

export const toastError = (sanityToast: ToastContextValue | undefined, e: unknown): void => {
  let message
  if (typeof e === 'string') {
    message = e
  }
  if (e instanceof Error) {
    message = e.message
  }
  console.error(e)
  if (sanityToast)
    sanityToast.push({status: 'error', title: 'Something Went Wrong', description: message})
}
