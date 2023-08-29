import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  active?: boolean;
  page: number;
  onPageChange: (page: number) => void;
}
export function PaginationItem({ active = false, page, onPageChange }: PaginationItemProps) {




  return active
    ? (<Button
      size='sm'
      fontSize='xs'
      width='4'
      colorScheme="pink"
      disabled
      _disabled={{
        bg: 'pink.500',
        cursor: 'default'
      }}
    >
      {page}
    </Button>)
    : (<Button
      size='sm'
      fontSize='xs'
      width='4'
      bg='gray.700'
      _hover={{
        bg: 'gray.500'
      }}
      onClick={() => onPageChange(page)}
    >
      {page}
    </Button>)
}