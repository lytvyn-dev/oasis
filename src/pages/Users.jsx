import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";
import PageLayout from "../ui/PageLayout";

function NewUsers() {
  return (
    <PageLayout>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </PageLayout>
  );
}

export default NewUsers;
