import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// 한 페이지에서 요청할 아이템수
const ROWS_PER_PAGE = 8; 

const ProductList = () => {
  const { products, isLoading, isError, fetchNextPage, isFetchingNextPage } =
    useSearchProductQuery({
      rowsPerPage: ROWS_PER_PAGE,
      // startCount: 몇번째 상품부터 불러올건지 시작인덱스 / row: 받아 올 상품 개수
      queryFn: (pageParam = 1) =>
        getSearchProduct({
          startCount: ROWS_PER_PAGE * (pageParam - 1),
          row: ROWS_PER_PAGE,
        }),
    });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isLoading) {
    return (
      <div className={cx("productList")}>
        <Skeleton />
      </div>
    );
  }

  if (isError) {
    return <></>;
  }

  return (
    <div className={cx("productList")}>
      {products.map((product, index) => {
        <ProductCard key={index} product={product} />;
      })}

      {isFetchingNextPage ? <Skeleton /> : <div ref={ref} />}
    </div>
  );
};
export default ProductList;
