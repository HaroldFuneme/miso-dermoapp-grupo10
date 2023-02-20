/* eslint-disable @typescript-eslint/naming-convention */
export interface Session {
  username:               string;
  pool:                   Pool;
  session:                null;
  client:                 Client;
  signInUserSession:      SignInUserSession;
  authenticationFlowType: string;
  storage:                Storage;
  keyPrefix:              string;
  userDataKey:            string;
  attributes:             Attributes;
  preferredMFA:           string;
}

export interface Attributes {
  sub:            string;
  email_verified: boolean;
  birthdate:      string;
  name:           string;
  email:          string;
}

export interface Client {
  endpoint:     string;
  fetchOptions: FetchOptions;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FetchOptions {
}

export interface Pool {
  userPoolId:                         string;
  clientId:                           string;
  client:                             Client;
  advancedSecurityDataCollectionFlag: boolean;
  storage:                            Storage;
}

export interface Storage {
  'amplify-signin-with-hostedUI':                                                                              string;
  'CognitoIdentityServiceProvider.cjbbfes0arcc2npbqp8d3i3k.577b5166-3cf5-46f1-a6ed-cf532a825bfc.clockDrift':   string;
  'CognitoIdentityServiceProvider.cjbbfes0arcc2npbqp8d3i3k.577b5166-3cf5-46f1-a6ed-cf532a825bfc.refreshToken': string;
  'CognitoIdentityServiceProvider.cjbbfes0arcc2npbqp8d3i3k.577b5166-3cf5-46f1-a6ed-cf532a825bfc.accessToken':  string;
  'CognitoIdentityServiceProvider.cjbbfes0arcc2npbqp8d3i3k.LastAuthUser':                                      string;
  'CognitoIdentityServiceProvider.cjbbfes0arcc2npbqp8d3i3k.577b5166-3cf5-46f1-a6ed-cf532a825bfc.userData':     string;
  'CognitoIdentityServiceProvider.cjbbfes0arcc2npbqp8d3i3k.577b5166-3cf5-46f1-a6ed-cf532a825bfc.idToken':      string;
}

export interface SignInUserSession {
  idToken:      IDToken;
  refreshToken: RefreshToken;
  accessToken:  AccessToken;
  clockDrift:   number;
}

export interface AccessToken {
  jwtToken: string;
  payload:  AccessTokenPayload;
}

export interface AccessTokenPayload {
  sub:        string;
  iss:        string;
  client_id:  string;
  origin_jti: string;
  event_id:   string;
  token_use:  string;
  scope:      string;
  auth_time:  number;
  exp:        number;
  iat:        number;
  jti:        string;
  username:   string;
}

export interface IDToken {
  jwtToken: string;
  payload:  IDTokenPayload;
}

export interface IDTokenPayload {
  sub:                string;
  email_verified:     boolean;
  birthdate:          string;
  iss:                string;
  'cognito:username': string;
  origin_jti:         string;
  aud:                string;
  event_id:           string;
  token_use:          string;
  auth_time:          number;
  name:               string;
  exp:                number;
  iat:                number;
  jti:                string;
  email:              string;
}

export interface RefreshToken {
  token: string;
}
