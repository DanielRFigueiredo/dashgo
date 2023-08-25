import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from 'react'

interface LinkActiveProps extends LinkProps {
  children: ReactElement
}

export function LinkActive({ children, ...rest }: LinkActiveProps) {
  const { asPath } = useRouter()
  const activePath = formatPathAndCheckMatch(asPath, String(rest.href))

  return (
    <Link {...rest}>
      {cloneElement(children, { color: activePath ? 'pink.400' : 'gray.50' })}
    </Link>
  )
}

function formatPathAndCheckMatch(path: string, href: string): boolean {
  const newPath = '/' + path.split('/')[1]
  return newPath === href
}