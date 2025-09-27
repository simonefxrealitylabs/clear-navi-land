import { supabase } from '@/integrations/supabase/client';
import { Tables, TablesInsert, TablesUpdate } from '@/integrations/supabase/types';

export type User = Tables<'users'>;
export type UserInsert = TablesInsert<'users'>;
export type UserUpdate = TablesUpdate<'users'>;

export type Listing = Tables<'listings'>;
export type ListingInsert = TablesInsert<'listings'>;
export type ListingUpdate = TablesUpdate<'listings'>;

export type Inquiry = Tables<'inquiries'>;
export type InquiryInsert = TablesInsert<'inquiries'>;

// User Management Functions
export const getUserProfile = async (userId: string): Promise<User | null> => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }

  return data;
};

export const updateUserProfile = async (userId: string, updates: UserUpdate): Promise<User | null> => {
  const { data, error } = await supabase
    .from('users')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();

  if (error) {
    console.error('Error updating user profile:', error);
    return null;
  }

  return data;
};

export const getAllUsers = async (): Promise<User[]> => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching users:', error);
    return [];
  }

  return data || [];
};

export const updateUserStatus = async (userId: string, status: User['status']): Promise<boolean> => {
  const { error } = await supabase
    .from('users')
    .update({ status })
    .eq('id', userId);

  if (error) {
    console.error('Error updating user status:', error);
    return false;
  }

  return true;
};

export const updateUserRole = async (userId: string, role: User['role']): Promise<boolean> => {
  const { error } = await supabase
    .from('users')
    .update({ role })
    .eq('id', userId);

  if (error) {
    console.error('Error updating user role:', error);
    return false;
  }

  return true;
};

// Listing Management Functions
export const getListings = async (): Promise<Listing[]> => {
  const { data, error } = await supabase
    .from('listings')
    .select(`
      *,
      users:user_id (
        first_name,
        last_name,
        email
      )
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching listings:', error);
    return [];
  }

  return data || [];
};

export const getListingById = async (listingId: string): Promise<Listing | null> => {
  const { data, error } = await supabase
    .from('listings')
    .select(`
      *,
      users:user_id (
        first_name,
        last_name,
        email,
        phone
      )
    `)
    .eq('id', listingId)
    .single();

  if (error) {
    console.error('Error fetching listing:', error);
    return null;
  }

  return data;
};

export const createListing = async (listing: ListingInsert): Promise<Listing | null> => {
  const { data, error } = await supabase
    .from('listings')
    .insert(listing)
    .select()
    .single();

  if (error) {
    console.error('Error creating listing:', error);
    return null;
  }

  return data;
};

export const updateListing = async (listingId: string, updates: ListingUpdate): Promise<Listing | null> => {
  const { data, error } = await supabase
    .from('listings')
    .update(updates)
    .eq('id', listingId)
    .select()
    .single();

  if (error) {
    console.error('Error updating listing:', error);
    return null;
  }

  return data;
};

export const updateListingStatus = async (listingId: string, status: Listing['status']): Promise<boolean> => {
  const { error } = await supabase
    .from('listings')
    .update({ status })
    .eq('id', listingId);

  if (error) {
    console.error('Error updating listing status:', error);
    return false;
  }

  return true;
};

export const deleteListing = async (listingId: string): Promise<boolean> => {
  const { error } = await supabase
    .from('listings')
    .delete()
    .eq('id', listingId);

  if (error) {
    console.error('Error deleting listing:', error);
    return false;
  }

  return true;
};

// Inquiry Management Functions
export const getInquiries = async (): Promise<Inquiry[]> => {
  const { data, error } = await supabase
    .from('inquiries')
    .select(`
      *,
      listings:listing_id (
        title,
        users:user_id (
          first_name,
          last_name
        )
      )
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching inquiries:', error);
    return [];
  }

  return data || [];
};

export const createInquiry = async (inquiry: InquiryInsert): Promise<Inquiry | null> => {
  const { data, error } = await supabase
    .from('inquiries')
    .insert(inquiry)
    .select()
    .single();

  if (error) {
    console.error('Error creating inquiry:', error);
    return null;
  }

  return data;
};

export const updateInquiryStatus = async (inquiryId: string, status: Inquiry['status']): Promise<boolean> => {
  const { error } = await supabase
    .from('inquiries')
    .update({ status })
    .eq('id', inquiryId);

  if (error) {
    console.error('Error updating inquiry status:', error);
    return false;
  }

  return true;
};

// Dashboard Statistics
export const getDashboardStats = async () => {
  const [usersResult, listingsResult, inquiriesResult] = await Promise.all([
    supabase.from('users').select('id, role, status, created_at'),
    supabase.from('listings').select('id, status, created_at'),
    supabase.from('inquiries').select('id, status, created_at'),
  ]);

  const users = usersResult.data || [];
  const listings = listingsResult.data || [];
  const inquiries = inquiriesResult.data || [];

  return {
    totalUsers: users.length,
    activeUsers: users.filter(u => u.status === 'active').length,
    totalListings: listings.length,
    activeListings: listings.filter(l => l.status === 'active').length,
    pendingListings: listings.filter(l => l.status === 'pending').length,
    totalInquiries: inquiries.length,
    newInquiries: inquiries.filter(i => i.status === 'new').length,
    recentUsers: users.filter(u => {
      const createdAt = new Date(u.created_at);
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return createdAt >= thirtyDaysAgo;
    }).length,
  };
};

