import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import NotificationsContainer from "./components/notifications/NotificationsContainer";

async function fetcher(...args) {
  const response = await fetch(...args);
  const data = await response.json();

  if (!response.ok) {
    const error = new Error("Error Fetching Data");
    error.status = response.status;

    if (data?.errors?.length === 1) {
      error.name = data.errors[0].name;
      error.message = data.errors[0].message;
    } else {
      error.name = "Encountered Errors";
      error.entries = data.errors;
    }

    throw error;
  }

  return data;
}

export default function AdminConditionalWrapper({ pageProps, children }) {
  const router = useRouter();

  if (router.pathname.startsWith("/admin")) {
    return (
      <NotificationsContainer>
        <SWRConfig value={{ fetcher }}>{children}</SWRConfig>
      </NotificationsContainer>
    );
  }

  return children;
}
