import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Select,
  useDisclosure,
  useColorModeValue,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  return (
    <Flex h={16} w="100%" flexDirection="row" alignItems="center">
      <Input placeholder="Search blog" />
      <IconButton size={"md"} icon={<SearchIcon />} aria-label={"Open Menu"} />
    </Flex>
  );
};

const Layout = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        w="100vw"
        position="fixed"
        bg={useColorModeValue("gray.100", "gray.200")}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Heading>Fit2School</Heading>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <SearchBar />
            </HStack>
          </HStack>

          <Flex alignItems={"center"} mr={4}>
            <Select placeholder="Select Language" bg="gray.300" color="white">
              <option value="si">Sinhala</option>
              <option value="ta">Tamil</option>
            </Select>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <SearchBar />
          </Box>
        ) : null}
      </Box>

      <Box pt={9}></Box>
      {children}
    </>
  );
};

export default Layout;
