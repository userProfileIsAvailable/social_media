import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
const PhotoIcon = (props) => {
	return (
		<SvgIcon {...props}>
			<path d='M 19.75 2 H 4.25 C 3.01 2 2 3.01 2 4.25 v 15.5 C 2 20.99 3.01 22 4.25 22 h 15.5 c 1.24 0 2.25 -1.01 2.25 -2.25 V 4.25 C 22 3.01 20.99 2 19.75 2 Z M 4.25 3.5 h 15.5 c 0.413 0 0.75 0.337 0.75 0.75 v 9.676 l -3.858 -3.858 c -0.14 -0.14 -0.33 -0.22 -0.53 -0.22 h -0.003 c -0.2 0 -0.393 0.08 -0.532 0.224 l -4.317 4.384 l -1.813 -1.806 c -0.14 -0.14 -0.33 -0.22 -0.53 -0.22 c -0.193 -0.03 -0.395 0.08 -0.535 0.227 L 3.5 17.642 V 4.25 c 0 -0.413 0.337 -0.75 0.75 -0.75 Z m -0.744 16.28 l 5.418 -5.534 l 6.282 6.254 H 4.25 c -0.402 0 -0.727 -0.322 -0.744 -0.72 Z m 16.244 0.72 h -2.42 l -5.007 -4.987 l 3.792 -3.85 l 4.385 4.384 v 3.703 c 0 0.413 -0.337 0.75 -0.75 0.75 Z' />
		</SvgIcon>
	);
};

export default PhotoIcon;
