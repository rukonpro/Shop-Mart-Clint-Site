import React from 'react';


const Services = () => {
    const Services = [
        { icon: 'fas fa-taxi', title: 'Free Shipping', subtitle: 'Only orders from $ 500' },
        { icon: 'fas fa-undo-alt', title: '07 days return', subtitle: 'Lorem Ipsum is simply' },
        { icon: 'fas fa-phone-volume', title: 'Support 24/7', subtitle: 'It is a long established' },

    ]
    return (
        <div className=' container my-3'>
            <div className=' d-flex justify-content-around flex-wrap'>
                {
                    Services.map((service, index) =>
                        <div key={index} className='border border-1 py-4 px-5 d-flex my-3 justify-content-between align-items-center'>
                            <div className='px-2'>
                                <i style={{ fontSize: '100px', color: 'rgb(0, 119, 119)' }} className={service.icon}></i>
                            </div>
                            <div>
                                <h4>{service.title}</h4>
                                <p>{service.subtitle}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;