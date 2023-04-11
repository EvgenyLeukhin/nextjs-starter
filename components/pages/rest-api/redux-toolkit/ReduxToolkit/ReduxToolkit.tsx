import { useGetProductsQuery } from '@/store/redux-toolkit/api/api';
import { Button, Loader } from '@/components/ui';
import { IProduct } from '@/store/redux-toolkit/api/api.types';
import { useActions } from '@/store/redux-toolkit/hooks/useActions';
import { useTypedSelector } from '@/store/redux-toolkit/hooks/useTypedSelectors';
import { Statuses } from '@/types/common';
import styles from './ReduxToolkit.module.scss';

// @reduxjs/toolkit
// react-redux

const ReduxToolkit = () => {
  // redux api hook with limit
  const {
    data,
    isLoading,
    // isError,
  } = useGetProductsQuery(5);

  // redux actions
  const { addItem, removeItem, clearItems } = useActions();

  // redux selector (cart)
  const { cart } = useTypedSelector(state => state);

  const cartToShow = cart.map(product => `${product.id} -  ${product.title}`);

  return (
    <section className={styles.ReduxToolkit}>
      <h3>Reducer 1 (cart)</h3>

      <div className={styles.ReduxToolkit__cart}>
        Cart items: <b>{cart.length}</b>{' '}
        <span className='text-primary' onClick={() => clearItems()}>
          [clear cart]
        </span>
      </div>

      <div className={styles.ReduxToolkit__products}>
        {isLoading ? (
          <Loader />
        ) : (
          data?.map((product: IProduct) => {
            const { id, title, image } = product;
            const isAdded = cart.some(product => product.id === id);

            return (
              <div key={id} className={styles.ReduxToolkit__productCard}>
                <h3>{title}</h3>
                <p>{title}</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt='image' width={80} />

                <Button
                  status={isAdded ? Statuses.danger : Statuses.primary}
                  onClick={() =>
                    isAdded ? removeItem(product.id) : addItem(product)
                  }
                >
                  {isAdded ? 'Remove' : 'Add to cart'}
                </Button>
              </div>
            );
          })
        )}
      </div>

      <Button onClick={() => alert(JSON.stringify(cartToShow))}>Submit</Button>
    </section>
  );
};

export default ReduxToolkit;
