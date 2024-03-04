import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalContentRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-12',
    'flex',
    'flex-wrap',
    'items-center',
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="m-auto flex w-full justify-center">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { VerticalContentRow };
