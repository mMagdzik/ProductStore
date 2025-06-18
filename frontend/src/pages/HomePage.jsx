import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container maxW={"container.xl"} py={12}>
      <VStack spacing={8}>
        <Text
          bgGradient={"linear(to-l, #7928CA, #FF0080)"}
          bgClip={"text"}
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
        >
          Current Products 🚀
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
        ></SimpleGrid>

        <Text
          fontSize="xl"
          textAlign={"center"}
          fontWeight="bold"
          color="gray.500"
        >
          No Products found{" "}
          <Link to={"/create"}>
            <Text
              as="span"
              color="purple.500"
              _hover={{ textDecoration: "underline" }}
            >
              Create a Product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};

export default HomePage;
