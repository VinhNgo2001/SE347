import classNames from 'classnames/bind';
import styles from './ResultSearch.module.scss';
const cx = classNames.bind(styles);
function ResultSearch() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('name')}>BLACK ADAM</div>
        </div>
    );
}

export default ResultSearch;
