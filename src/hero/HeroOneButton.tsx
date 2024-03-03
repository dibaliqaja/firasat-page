import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
      {props.title}
    </h1>
    <div className="rating-wrapper">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 881 130"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="matrix(1,0,0,1,-634.728,-382.568)">
          <path
            d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
            fill="#ecd501"
          />
        </g>
        <g transform="matrix(1,0,0,1,-447.914,-382.568)">
          <path
            d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
            fill="#ecd501"
          />
        </g>
        <g transform="matrix(1,0,0,1,-261.961,-382.568)">
          <path
            d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
            fill="#ecd501"
          />
        </g>
        <g transform="matrix(1,0,0,1,-76.0238,-382.568)">
          <path
            d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
            fill="#ecd501"
          />
        </g>
        <g transform="matrix(1,0,0,1,109.853,-382.568)">
          <path
            d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
            fill="#ecd501"
          />
        </g>
      </svg>
    </div>
    <div className="hero-description my-16">{props.description}</div>

    {props.button}
  </header>
);

export { HeroOneButton };
