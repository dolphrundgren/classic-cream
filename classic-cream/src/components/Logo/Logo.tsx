import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Classic Cream Logo"
      width={193}
      height={48}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[300px] w-full h-[130px]', className)}
      src="/api/media/file/CC_LOGO.svg"
    />
  )
}
