

const Main = () => {
return ( 
<div style={{height:'90rem'}} className=" grid-cols-3 " >
   <div className='fixed bottom-16 z-10 mr-auto right-5'>
     
   </div>
   <div className="col-span-3 flex flex-col items-center">
      <h1 className="text-7xl font-bold text-center mt-36">Learning made easy</h1>
      <h1 className="text-3xl text-center mt-8">MyCourses to expend your knowledge from start to finish.</h1>
      
     
   </div>
   <div className="col-span-3 mt-36">
      <div className=" text-center flex flex-row bg-slate-200 rounded-lg w-11/12 h-60 mx-auto">
         <div className="basis-1/2">
            <h1 className="text-4xl font-bold mt-6">Top-notch support</h1>
            <h1 className="text-xl font-bold mt-10 ml-4">All of our features are backed by a knowledgeable support team.</h1>
         </div>
         <div className="basis-1/2">
            <img className="w-full h-full rounded-r-lg" src="https://nmgprod.s3.amazonaws.com/media/files/28/09/28098119c156671e8255dedbc45f1db5/cover_image.jpg.760x400_q85_crop_upscale.jpg"/>
         </div>
      </div>
   </div>
   <div className='col-span-3 w-11/12 mx-auto mt-28'>
      <table className="table-auto w-full bg-zinc-200 rounded-lg">
         <tbody>
            <tr>
               <td>
                  <h1 className='text-5xl font-bold text-center'>Frequently Asked Questions</h1>
               </td>
            </tr>
            <tr>
               <td >
                  <div >
                     <details className="border-b-2 border-gray-100 mt-16 close:bg-white dark:close:bg-slate-900 close:ring-1 close:ring-black/5 dark:close:ring-white/10 close:shadow-lg p-6 rounded-lg" >
                        <summary className="text-3xl font-bold text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none hover:text-violet-600">
                           Can I allow people to submit events to my calendar?    
                        </summary>
                        <div className=" font-bold mt-8 text-sm leading-6 text-slate-600 dark:text-slate-400">
                           <p>Absolutely! Our Community Events add-on is designed to facilitate submissions. Install Community Events alongside The Events Calendar and a page will be added to your WordPress site with a form that visitors can use to submit events. As the calendar owner, you have full control over whether event submissions are published immediately or require moderation first.</p>
                           <p> If you want to let users sell tickets for the events they submit, check out Community Tickets. It runs with The Events Calendar, Community Events, and Event Tickets and empowers visitors to create and sell tickets, splitting the profits with you.</p>
                        </div>
                     </details>
                  </div>
               </td>
            </tr>
            <tr>
               <td>
                  <div>
                     <details className=" border-b-2 border-gray-100close:bg-white dark:close:bg-slate-900 close:ring-1 close:ring-black/5 dark:close:ring-white/10 close:shadow-lg p-6 rounded-lg" >
                        <summary className="text-3xl font-bold text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none hover:text-violet-600">
                           What’s the difference between The myCalendar and The myCalendar Pro?    
                        </summary>
                        <div className=" font-bold mt-8 text-sm leading-6 text-slate-600 dark:text-slate-400">
                           <p>The Events Calendar is our cornerstone plugin, and it’s required in order to run any of our premium calendar add-ons, including Events Calendar Pro, Community Events, Filter Bar, and others.</p>
                           <p>In other words, Events Calendar Pro runs alongside The Events Calendar and enhances it with extra features, including recurring events, additional calendar views, calendar shortcodes, advanced widgets, custom event fields and more.</p>
                        </div>
                     </details>
                  </div>
               </td>
            </tr>
            <tr>
               <td>
                  <div>
                     <details className="border-b-2 border-gray-100 close:bg-white dark:close:bg-slate-900 close:ring-1 close:ring-black/5 dark:close:ring-white/10 close:shadow-lg p-6 rounded-lg" >
                        <summary className="text-3xl font-bold text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none hover:text-violet-600">
                           how can i see my friend's events? 
                        </summary>
                        <div className=" font-bold mt-8 text-sm leading-6 text-slate-600 dark:text-slate-400">
                           <p>Here in myCalenar we respect our user's privacy. you can review your mate's events only if they share it to you!</p>
                        </div>
                     </details>
                  </div>
               </td>
            </tr>
            <tr>
               <td>
                  <div>
                     <details className="border-b-2 border-gray-100 close:bg-white dark:close:bg-slate-900 close:ring-1 close:ring-black/5 dark:close:ring-white/10 close:shadow-lg p-6 rounded-lg" >
                        <summary className="text-3xl font-bold text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none hover:text-violet-600">
                           Can I have more than one calendar on my site? 
                        </summary>
                        <div className=" font-bold mt-8 text-sm leading-6 text-slate-600 dark:text-slate-400">
                           <p>Unfortunately, no. However, you can use event categories or tags to create calendar views that only display certain events. For example, you could create a direct link to a calendar view that only shows events categorized as “Fitness,” like this example from our demo site.</p>
                           <p>With Events Calendar Pro, you can use shortcodes to embed your calendar on other WordPress pages and posts, then filter that calendar by category.</p>
                        </div>
                     </details>
                  </div>
               </td>
            </tr>
            <tr>
               <td>
                  <div>
                     <details className="border-b-2 border-gray-100 close:bg-white dark:close:bg-slate-900 close:ring-1 close:ring-black/5 dark:close:ring-white/10 close:shadow-lg p-6 rounded-lg" >
                        <summary className="text-3xl font-bold text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none hover:text-violet-600">
                           Can I try it out before I buy a subscription? 
                        </summary>
                        <div className=" font-bold mt-8 text-sm leading-6 text-slate-600 dark:text-slate-400">
                           <p>Installing The Events Calendar is the best way to try it out. This plugin is available for free from the WordPress plugin directory and includes all of the core calendar features.</p>
                           <p>If you’re curious about the features included in Events Calendar Pro, we have a live demo you can check out to see recurring events, widgets and shortcodes, and venues and organizers.</p>
                        </div>
                     </details>
                  </div>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <h1 className="text-5xl font-bold text-center mt-20 ">our products</h1>
   <div className='col-span-3 w-11/12 mx-auto mt-28  grid grid-cols-3 gap-10'>
   <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://cdn.learnwoo.com/wp-content/uploads/2020/03/image3-2.png" alt="Modern building architecture"/>
    </div>
    <div className="p-8 bg-slate-100">
      <div className="mt-14 uppercase tracking-wide text-sm text-indigo-500 font-semibold">Shopify</div>
      <p className="mt-16 text-slate-500">are Looking for buying the most high-quality clothes ? you have came to the right place shopify!</p>
    </div>
  </div>
</div>
<div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-full w-full object-cover md:h-full md:w-48" src="https://www.tvbox.one/wp-content/uploads/2021/01/movily.jpg" alt="Modern building architecture"/>
    </div>
    <div className="p-8 bg-slate-100">
      <div className="mt-10 uppercase tracking-wide text-sm text-indigo-500 font-semibold">Movily</div>
      <p className="mt-20 text-slate-500"> Having a movie night and cant decide what movie to watch?,we are here to help you movily.</p>
    </div>
  </div>
</div>
<div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-full w-full object-cover md:h-full md:w-48" src="https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/37698906_432030273977413_2656009768711225344_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=epG6fx9jcwoAX9p22R5&_nc_ht=scontent.fhfa1-1.fna&oh=00_AfAwWqFrnFgzBofk53LO6pqWllCfDq8t4Bwgji2SpQ2DJw&oe=63D4C6A3" alt="Modern building architecture"/>
    </div>
    <div className="p-8 bg-slate-100">
      <div className="mt-16 uppercase tracking-wide text-sm text-indigo-500 font-semibold">CvMaker</div>
      <p className="mt-20 text-slate-500">Have a job interview and dont have a cv? let us help you with,we are for you cvMaker!.</p>
    </div>
  </div>
</div>
   </div>

</div>
);
}
export default Main;