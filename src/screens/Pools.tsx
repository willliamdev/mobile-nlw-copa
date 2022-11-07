import { VStack, Icon } from "native-base";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Octicons } from "@expo/vector-icons";

export function Pools() {

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Meus Bolões" showBackButton />
      <VStack
        mt={8}
        mb={4}
        mx={5}
        pb={4}
        alignItems="center"
        borderBottomWidth={1}
        borderBottomColor="gray.600">

        <Button
          leftIcon={<Icon as={Octicons} name="search" color="black" size="md" />}
          title="BUSCAR BOLÃO POR CÓDIGO"
        />

      </VStack>
    </VStack >
  );
}
