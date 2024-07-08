import { cva, cn, type VariantProps } from '#src/utils/theme'

const styles = {
  root: cva('', {
    variants: {},
    defaultVariants: {}
  })
}

type ExampleProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof styles.root> & {
    //
  }

const Example: React.FC<ExampleProps> = (props) => {
  const { className, children, ...rest } = props

  return (
    <section className={cn(styles.root({ className }))} {...rest}>
      {children}
    </section>
  )
}

export { Example }
