export type JwtPayload = {
    sub: number;
    role: string;
    email: string;
};
export type JwtPayloadWithRefreshToken = JwtPayload & {
    refreshToken: string;
};
