import { useGetProductsQuery } from '@/store-toolkit/api/api';
import { Button, Loader } from '@/components/ui';
import { IProduct } from '@/store-toolkit/api/api.types';
import { useActions } from '@/store-toolkit/hooks/useActions';
import { useTypedSelector } from '@/store-toolkit/hooks/useTypedSelectors';
import { Statuses } from '@/types/common';
import styles from './ReduxToolkitExample.module.scss';

// @reduxjs/toolkit
// react-redux

const ReduxToolkitExample = () => {
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
    <section className={styles.ReduxToolkitExample}>
      <h2>Redux-toolkit example</h2>

      <div className={styles.ReduxToolkitExample__cart}>
        Cart items: <b>{cart.length}</b>{' '}
        <span className='text-primary' onClick={() => clearItems()}>
          [clear cart]
        </span>
      </div>

      <div className={styles.ReduxToolkitExample__products}>
        {isLoading ? (
          <Loader />
        ) : (
          data?.map((product: IProduct) => {
            const { id, title, image } = product;
            const isAdded = cart.some(product => product.id === id);

            return (
              <div key={id} className={styles.ReduxToolkitExample__productCard}>
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

export default ReduxToolkitExample;
