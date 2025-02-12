import React from "react";
import One from "@/page/auth/signup/steps/one";
import Two from "@/page/auth/signup/steps/two";
import Three from "@/page/auth/signup/steps/three";
import { SignUpProps, ValidateProps } from "@/type/auth/index.type";

export interface StepProps {
    signUp: SignUpProps;
    validate?: ValidateProps;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type FormDataType = {
    [K in keyof SignUpProps]: string;
  };  

interface StepConfig {
    component: React.ComponentType<StepProps>;
    validate: (data: SignUpProps) => boolean;
}

export const SIGNUP_STEPS: StepConfig[] = [
    {
        component: One,
        validate: (data: SignUpProps) => !!data.id && !!data.password && !!data.passwordConfirm,
    },
    {
        component: Two,
        validate: (data: SignUpProps) => !!data.name && !!data.tel && !!data.telAccess,
    },
    {
        component: Three,
        validate: (data: SignUpProps) => !!data.tel && !!data.store_no && !!data.fax_no,
    },
];
