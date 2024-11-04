const colorVariants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
] as const;

const extendedColorVariants = [
  ...colorVariants,
  'pink',
  'purple',
] as const;

export { colorVariants, extendedColorVariants };
