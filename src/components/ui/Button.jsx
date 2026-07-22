export default function Button({ as: Tag = 'button', variant = 'primary', size, fullWidth, className = '', children, ...props }) {
  const classes = [
    'btn',
    variant === 'outline' ? 'btn-outline' : 'btn-primary',
    size === 'sm' ? 'btn-sm' : '',
    fullWidth ? 'btn-full' : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}
