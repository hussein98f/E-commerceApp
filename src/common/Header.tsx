"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  MenuDivider,
  MenuItem,
  MenuButton,
  Center,
  Avatar,
  MenuList,
  Menu,
  Image,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import ColorSwitcher from "../components/ui/ColorSwitcher";
import far4logo from "../assets/far4logo.svg";
import { Link } from "react-router-dom";
import CookiesService from "../services/Cookie";
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectCart } from "../app/features/shop/cartSlice";
import { onOpenCartDrawer } from "../app/features/globalSlice";
import { useAppDispatch } from "../app/hooks";

export default function Header() {
  const dispatch = useAppDispatch();
  const { product } = useSelector(selectCart);
  const { isOpen, onToggle } = useDisclosure();
  const token = CookiesService.get("jwt");
  const onLogout = () => {
    CookiesService.remove("jwt");
    window.location.reload();
  };
  const onCartOpen = () => dispatch(onOpenCartDrawer());

  return (
    <Box
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
    >
      <Flex
        maxW={"1200px"}
        mx={"auto"}
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <MdClose width={3} height={3} />
              ) : (
                <RxHamburgerMenu width={5} height={5} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          alignItems={"center"}
          justify={{ base: "center", md: "start" }}
        >
          <Image src={far4logo} h="55px" />
          <Flex display={{ base: "none", md: "flex" }} ms={5}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={3}
        >
          <Button
            size="sm"
            alignItems={"center"}
            display={"flex"}
            gap={2}
            onClick={onCartOpen}
            fontSize={16}
            fontWeight={300}
          >
            Cart ({product.length})
            <FaOpencart size={18} />
          </Button>
          {!token && (
            <>
              <Button
                size={"sm"}
                as={Link}
                fontSize={"sm"}
                fontWeight={300}
                variant={"link"}
                to={"/login"}
              >
                Sign In
              </Button>
              <Button
                size={"sm"}
                as={Link}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={400}
                color={"white"}
                bg={"pink.400"}
                to={"#"}
                _hover={{
                  bg: "pink.300",
                }}
              >
                Sign Up
              </Button>
            </>
          )}
          <ColorSwitcher />

          {token && (
            <Menu>
              <MenuButton
                ms={1}
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={"https://avatars.dicebear.com/api/male/username.svg"}
                />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Avatar
                    size={"2xl"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem onClick={onLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={3}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as={Link}
                p={2}
                to={navItem.to ?? "#"}
                fontSize={"sm"}
                fontWeight={400}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"max-content"}
                maxW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, to, subLabel }: NavItem) => {
  return (
    <Box
      as={Link}
      to={to}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={IoIosArrowForward} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, to }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as={Link}
        to={to ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={IoIosArrowDown}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as={Link} key={child.label} py={2} to={child.to}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  to?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },

  {
    label: "Shop",
    to: "/products",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];
