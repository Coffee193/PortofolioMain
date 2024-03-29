export let ret_list = [
    {'header':'Generating Snowflake Ids',
    'note':'The generation of the snowflakes is based on the snowflakes algorithms that are used by Twitter& Discord',
    'url':'snowflake_ids'},

    {'header':'Salting Peppering& Hashing User Passwords',
    'note':'The argon2 algo was used for salting, a secret key for peppering& sha256 for the final hashing',
    'url':'password_security'},

    {'header':'MongoDB | fetching, matching& sorting',
    'note':'Ginving User the ability to search by Brand, Department, Price, Color, Arrival Date, Availability etc',
    'url':'mongodb_aggr'},

    {'header':'Access& Refresh Tockens | Generation& Validation',
    'note':'Using Python& Redis to handle JWT tockens',
    'url':'jwt_tockens'},

    {'header':'Webscraping Amazon products for our project',
    'note':'How products were webscraped from amazon& getting pictures via screenshots to avoid getting banned from too many requests',
    'url':'webscr'},

    {'header':'Extracting Color from pictures | K-means, Colorthief',
    'note':'Extracting primary hex color from image& a (temporarilly) naive approach of matching hex to color name',
    'url':'extract_color'},

    {'header': 'Going into Deployment | Gunicorn& Nginx',
    'note':'Gunicorn workers, threads | Nginx reverse proxy, selft-signing certificates, round-robin and many more',
    'url':'deployment'},
    
    {'header':'Going public with Railway',
    'note':'Changing our code to host it on Railway',
    'url':'deployment_railway'}]

// NOTE: in url do not put / in front! Putting a slash means absolute path (path from localhost).
//       without / in front, it is a relative path (path from url that clicked link)
//'url':'/docs/ecommerce/snowflake_ids',