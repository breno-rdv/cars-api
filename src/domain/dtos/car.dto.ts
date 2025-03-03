export class CreateCarDTO {
  model!: string;
  brand!: string;
  year!: number;
  price!: number;
  color!: string;
}

export class UpdateCarDTO implements Partial<CreateCarDTO> {
  model?: string;
  brand?: string;
  year?: number;
  price?: number;
  color?: string;
}
