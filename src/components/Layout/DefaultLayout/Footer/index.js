import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('faci-nav')}></div>
                <div className={cx('nav')}></div>
            </div>
        </div>
    );
}

export default Footer;
