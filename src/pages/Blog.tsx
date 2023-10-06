// import React from 'react';
// import News from '../../shared/News';
// import Clients from '../../shared/Clients';
// import BackHome from '../../shared/BackHome';

const Blog: React.FC = () => {
  return (
    <>
      {/* <BackHome /> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 p-6">
        <News
          image="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/adult-blur-close-up-267394-1024x573.jpg"
          date="October 5, 2019"
          author="Paul"
          title="HOW to choose perfect gadgets"
          description="When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s ..."
        />
        {/* Other News components */}
      </div>
      {/* <Clients /> */}
    </>
  );
};

export default Blog;
