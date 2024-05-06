export interface BikeType {
    date_stolen: number;
    description: string | null;
    frame_colors: string[];
    frame_model: string | null;
    id: number;
    is_stock_img: boolean;
    large_img: string | null;
    location_found: string | null;
    manufacturer_name: string;
    external_id: string | null;
    registry_name: string | null;
    registry_url: string | null;
    serial: string;
    status: string;
    stolen: boolean;
    stolen_coordinates: [number, number] | null;
    stolen_location: string | null;
    thumb: string | null;
    title: string;
    url: string;
    year: number | null;
    propulsion_type_slug: string;
    cycle_type_slug: string;
    registration_created_at?:number
}
