type Props = {
	children: React.ReactNode;
};

import { AppState, Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Auth0ProviderWithNavigate = ({ children }: Props) => {
	const navigate = useNavigate();

	const domain = import.meta.env.VITE_AUTH0_DOMAIN;
	const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
	const redirectUrl = import.meta.env.VITE_AUTH0_CALLBACK_URL;
	const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

	if (!domain || !clientId || !redirectUrl || !audience) {
		throw new Error("Unable to initialize auth");
	}

	const onRedirectCallback = (appState?: AppState) => {
		navigate(appState?.returnTo || "/auth-callback");
	};

	return (
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			authorizationParams={{
				redirect_uri: redirectUrl,
				audience,
			}}
			onRedirectCallback={onRedirectCallback}>
			{children}
		</Auth0Provider>
	);
};

export default Auth0ProviderWithNavigate;
