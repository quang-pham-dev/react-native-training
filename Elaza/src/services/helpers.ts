import {ApiResponse, ApiErrorResponse} from 'apisauce'

/**
 * Check is Exist props
 * @param value
 * @returns
 */
export const isExits = (value = 0): boolean => value !== 0

/**
 * Calculator age
 * @param birthday
 * @returns age number
 */
export const calculateAge = (birthday: Date): number => {
  // birthday is a date
  const ageDifMs = Date.now() - birthday.getTime()
  const ageDate = new Date(ageDifMs) // miliseconds from epoch

  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

/**
 * Check length string
 * @param value
 * @returns length of string splitted
 */
export const checkValidFullName = (value: string): boolean => {
  const splitValue = value.split(' ')
  const length = splitValue.length
  const lastItem = splitValue[length - 1]

  return (length === 3 && lastItem.length > 0) || length > 3
}

export const removeSpecialCharacters = (value: string): string => {
  return value.replace(/[^\w\s]/gi, '')
}

export const handleResponse = (
  response: ApiResponse<unknown, unknown>,
  onSuccess: (data: any) => void,
  onError: (
    error: Pick<
      ApiErrorResponse<{message?: string; title?: string}>,
      'data' | 'originalError' | 'problem' | 'status'
    > | null,
  ) => void,
) => {
  if (response) {
    if (response.ok && response.data) {
      onSuccess(response.data)
    } else {
      const errorResponse = response as ApiErrorResponse<unknown>

      onError({
        data: errorResponse.data as {message?: string; title?: string},
        originalError: errorResponse.originalError,
        problem: errorResponse.problem,
        status: errorResponse.status,
      })
    }
  } else {
    onError(null)
  }
}
