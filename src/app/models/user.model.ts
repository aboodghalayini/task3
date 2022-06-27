export interface List<Type> {
    data: Type[];
    total: number;
    page: number;
    limit: number;
}
export interface UserPreview
{
  data: UserPreview[] | undefined;
	id: string;
	title: "mr"| "ms" |"mrs"| "miss"| "dr" | "" ;
	firstName: string;
	lastName: string;
	picture: string;
}
export interface UserFull extends UserPreview
{
	gender: ("male"| "female"| "other"| "");
	email: string;
	dateOfBirth: string;
	registerDate: string;
	phone: string;
	location: object;
}
export interface CreateUserModel {
    firstName: string;
    lastName: string;
    email: string;
}
