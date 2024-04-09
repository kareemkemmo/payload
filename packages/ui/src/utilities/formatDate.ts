import type { I18n } from '@payloadcms/translations'

import { format, formatDistanceToNow } from 'date-fns'

type FormatDateArgs = {
  date: Date | number | string | undefined
  i18n: I18n
  pattern: string
}

export const formatDate = ({ date, i18n, pattern }: FormatDateArgs): string => {
  const theDate = new Date(date)
  return format(theDate, pattern, { locale: i18n.dateFNS })
}

type FormatTimeToNowArgs = {
  date: Date | number | string | undefined
  i18n: I18n
}

export const formatTimeToNow = ({ date, i18n }: FormatTimeToNowArgs): string => {
  const theDate = new Date(date)
  return formatDistanceToNow(theDate, { locale: i18n.dateFNS })
}
