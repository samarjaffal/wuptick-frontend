import { Colors } from './colors';
import { css } from 'styled-components';

export const bold = '700';
export const semiBold = '600';
export const regular = '400';
export const light = '200';
export const borderRadius = '8px';
export const defaultFontSize = '14px';

export const title = css`
    font-size: 26px;
    color: ${Colors.black};
    font-weight: ${bold};
`;

export const subtitle = css`
    font-size: 16px;
    color: ${Colors.black};
    font-weight: ${regular};
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
