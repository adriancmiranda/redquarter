import $ from 'clsx';
import { FC, useEffect, useState } from 'react';
import styles from './Guidelines.module.scss';

export type GuidelinesProps = {
	className?: string;
	columns?: number;
	rows?: number;
};

const isDevelopment = process.env.NODE_ENV === 'development';
export const Guidelines: FC<GuidelinesProps> = (props) => {
	const { className = '', columns = 12, rows = 2, ...rest } = props;
	const [rowVisibility, setRowVisibility] = useState(isDevelopment);
	const [colVisibility, setColVisibility] = useState(isDevelopment);

	useEffect(() => {
		if (process.env.NODE_ENV !== 'test') {
			const onKeyDown = (evt: KeyboardEvent) => {
				if (evt.ctrlKey && evt.key === '.') {
					setRowVisibility((visible) => !visible);
				} else if (evt.ctrlKey && evt.key == '/') {
					setColVisibility((visible) => !visible);
				}
			};
			document.addEventListener('keydown', onKeyDown);
			return () => document.removeEventListener('keydown', onKeyDown);
		}
		return undefined;
	}, []);

	function renderGuide(type: 'column' | 'row') {
		const list = [];
		const size = (type === 'column' ? columns : rows) ?? 0;
		for (const key of new Array<number>(size + 1)) {
			list.push(<span key={`${key}x${list.length}`} className={styles[type]} />);
		}
		return list;
	}

	function renderColumns() {
		return colVisibility && columns > 0 && <div className={styles.Columns}>{renderGuide('column')}</div>;
	}

	function renderRows() {
		return rowVisibility && rows > 0 && <div className={styles.Rows}>{renderGuide('row')}</div>;
	}

	return (
		<div {...rest} className={$(styles.Guidelines, className)}>
			{renderColumns()}
			{renderRows()}
		</div>
	);
};

Guidelines.displayName = 'Guidelines';
export default Guidelines;
