import client from '@/lib/graphql-client';
import { GET_SERVICE } from '@/lib/queries';

const ServiceDetailsPage = async ({ params: { id } }) => {

    const data = await client.request(GET_SERVICE, { id });
    const service = data?.service;
    if (!service) {
        return <h1>Service not found</h1>;
    }
    return (
        <div>
            <h1>Service Details</h1>
            <p><strong>Title</strong> {service?.title}</p>
            <p><strong>Service Type:</strong> {service?.customFieldForService?.carWashType}</p>
            <p><strong>Price:</strong> ${service?.customFieldForService?.carWashPrice}</p>
            <p><strong>Contact Person:</strong> {service?.customFieldForService?.carWashPerson}</p>
            <p><strong>Contact Number:</strong> {service?.customFieldForService?.carWashContactNumber}</p>
            <p><strong>Location:</strong> {service?.customFieldForService?.carWashLocation[0]}</p>
        </div>
    );
};

export default ServiceDetailsPage;