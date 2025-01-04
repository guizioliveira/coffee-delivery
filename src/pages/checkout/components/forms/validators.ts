import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

export const schema = zod.object({
  cep: zod.string().regex(/^\d{5}-\d{3}$/, 'CEP inválido'),
  address: zod.string().min(1, 'Campo inválido'),
  number: zod.coerce.number().min(1, 'Campo inválido'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'Campo inválido'),
  city: zod.string().min(1, 'Campo inválido'),
  regionCode: zod
    .string()
    .length(2, 'Campo inválido')
    .regex(/^[A-Za-z]{2}$/, 'Somente letras. Ex.: RS, SC, SP'),
  paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Escolha uma forma de pagamento',
  }),
})

export type formData = zod.infer<typeof schema>

export const resolver = zodResolver(schema)
