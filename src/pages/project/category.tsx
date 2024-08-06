import Button from '@/components/button';
import useCategoryToName from '@/hooks/useCategoryToName';
import { MENU_ITEMS } from '@/settings/config';
import { memo, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const Category = memo(() => {
  const navigate = useNavigate();
  const [, getNameByCategory] = useCategoryToName();

  const category = useMemo(() => {
    return MENU_ITEMS[1].list.map((item) => {
      return (
        <Button key={item.category} onClick={() => navigate(`/project/${item.category}`)}>
          {getNameByCategory(item.category)}
        </Button>
      );
    });
  }, [MENU_ITEMS[1]]);

  return (
    <div className='head'>
      <div>
        <div className='flex w-fit flex-col lg:w-full [&>div]:w-fit'>
          <div>2.</div>
          <div>PROJECT</div>
        </div>
        <div>ALL</div>
        <div>{category.map((btn) => btn)}</div>
      </div>
    </div>
  );
});
export default Category;
