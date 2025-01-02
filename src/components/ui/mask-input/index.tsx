import { useMask, Replacement } from '@react-input/mask'
import { Input } from '@/components/ui/input'
import { InputHTMLAttributes } from 'react'

interface MaskedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: 'CEP' | 'REGION_CODE'
  error?: string
}

export function MaskedInput({ mask, error, ...rest }: MaskedInputProps) {
  const { mask: pattern, replacement } = replacementByMaskType(mask)
  const maskRef = useMask({
    mask: pattern,
    replacement,
  })

  return <Input ref={maskRef} error={error} {...rest} />
}

function replacementByMaskType(maskType: string): {
  mask: string
  replacement: Replacement | string
} {
  switch (maskType) {
    case 'CEP': {
      return {
        mask: '_____-___',
        replacement: { _: /\d/ },
      }
    }
    case 'REGION_CODE': {
      return {
        mask: '__',
        replacement: { _: /[A-Za-z]/ },
      }
    }
    default:
      return {
        mask: '',
        replacement: {},
      }
  }
}
