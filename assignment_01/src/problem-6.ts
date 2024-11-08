function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
    return { ...profile, ...updates };
}

interface Profile {
    name: string;
    age: number;
    email: string;
}
