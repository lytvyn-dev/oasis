import Heading from "../ui/Heading";
import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import PageLayout from "../ui/PageLayout";
import styled from "styled-components";

function Settings() {
  return (
    <PageLayout>
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingsForm />
    </PageLayout>
  );
}

export default Settings;
