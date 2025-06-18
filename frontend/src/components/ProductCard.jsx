import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600");

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight="bold" fontSize="xl" mb={4} color={textColor}>
          $ {product.price}
        </Text>
        <HStack>
          <IconButton icon={<EditIcon />} colorScheme="purple" />
          <IconButton icon={<DeleteIcon />} colorScheme="red" />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
