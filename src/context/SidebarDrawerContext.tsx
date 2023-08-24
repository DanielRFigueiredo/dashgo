import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactNode, createContext, useContext, useEffect } from "react";


type SidebarContextData = UseDisclosureReturn

interface SidebarContextProviderProps {
  children: ReactNode
}

const SidebarContext = createContext({} as SidebarContextData)

export function SidebarContextProvider({ children }: SidebarContextProviderProps) {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()

  }, [router.asPath])

  return (

    <SidebarContext.Provider value={disclosure}>
      {children}
    </SidebarContext.Provider>
  )
}


export const useSidebar = () => useContext(SidebarContext)