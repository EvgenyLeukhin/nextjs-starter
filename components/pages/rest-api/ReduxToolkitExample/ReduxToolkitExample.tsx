import { useGetProductsQuery } from '@/store/products/product.api';
import { Button, Loader } from '@/components/ui';
import { IProduct } from '@/store/products/products.types';
import { useActions } from '@/store/hooks/useActions';
import { useTypedSelector } from '@/store/hooks/useTypedSelectors';
import styles from './ReduxToolkitExample.module.scss';
import { Statuses } from '@/types/common';

const ReduxToolkitExample = () => {
  // redux hook with limit
  const {
    data,
    isLoading,
    // isError,
  } = useGetProductsQuery(5);
  const { addItem, removeItem, clearItems } = useActions();
  const { cart } = useTypedSelector(state => state);
  const cartToShow = cart.map(product => `${product.id} -  ${product.title}`);

  return (
    <section className={styles.ReduxToolkitExample}>
      <h2>Get data from Redux-toolkit hook</h2>

      <div className={styles.ReduxToolkitExample__cart}>
        Cart items: <b>{cart.length}</b>{' '}
        <span className='text-primary' onClick={() => clearItems()}>
          (clear cart)
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
