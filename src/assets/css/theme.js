import { Colors } from './colors';
import { css } from 'styled-components';

export const bold = css`
    font-weight: 700;
`;

export const semiBold = css`
    font-weight: 400;
`;

export const light = css`
    font-weight: 200;
`;

export const borderRadius = css`
    border-radius: 8px;
`;

export const title = css`
    font-size: 20px;
    color: ${Colors.black};
    font-weight: ${bold};
`;

export const subtitle = css`
    font-size: 18px;
    color: ${Colors.black};
    font-weight: ${semiBold};
`;

export const description = css`
    font-size: 14px;
    color: ${Colors.black};
    font-weight: ${bold};
`;

export const info = css`
    font-size: 12px;
    color: ${Colors.gray};
    font-weight: ${light};
`;
