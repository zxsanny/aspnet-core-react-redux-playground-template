import React, { useMemo, ReactNode, ReactText } from 'react';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';
import { normalizeUnit } from '../utils';

type LoaderProps = {
  readonly width?: ReactText;
  readonly height?: ReactText;
};

type IconSVGProps = {
  readonly src: string;
  readonly width?: ReactText;
  readonly height?: ReactText;
  readonly description?: string;
};

const Loader = styled.div<LoaderProps>`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const IconSVG: React.FC<IconSVGProps> = ({
  src,
  width,
  height,
  description
}) => {
  // Placeholder rendered while loading svg from source - dimensions of svg
  const loaderNode = useMemo<ReactNode>(() => (
    <Loader
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  ), [width, height]);

  return (
    <SVG
      src={src}
      width={width}
      height={height}
      loader={loaderNode}
      description={description}
    />
  );
};

export default IconSVG;